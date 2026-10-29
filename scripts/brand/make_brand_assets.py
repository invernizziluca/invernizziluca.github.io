#!/usr/bin/env python3
"""Creates the brand images of the music site from the logo, the portrait and the Archivo font.

Run it only when the logo, the portrait or the texts below change (the results are committed):
    pip install Pillow          # Pillow 10+ with FreeType (reads the .woff2 font directly)
    python3 scripts/brand/make_brand_assets.py

Outputs (all in public/):
    images/brand/li-mark-96.png, li-mark-192.png   logo in gold, transparent (header, icons)
    favicon.png (32 px), apple-touch-icon.png (180 px)
    images/og/home.jpg                             1200 x 630 preview for LinkedIn, WhatsApp & co.
    ../scripts/assets/og-badge.png                 name badge placed on the case-study previews
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parents[2]
PUBLIC = ROOT / 'public'
FONT = ROOT / 'src/assets/fonts/archivo-latin-wdth-normal.woff2'
LOGO = ROOT / 'scripts/brand/li-logo-source.png'  # source shape (gold original); only its alpha channel is used
PORTRAIT = PUBLIC / 'images/profile/luca-portrait.webp'

# Music edition: warm palette of the earlier site and CV
NAVY = (0x1C, 0x1C, 0x20)   # ink (name kept for the code below)
INK_2 = (0x4A, 0x4B, 0x52)
TEAL = (0x7A, 0x4F, 0x22)   # caramel
GOLD = (0xB8, 0x8E, 0x4A)   # logo
PAPER = (0xFA, 0xF7, 0xF2)
WHITE = (255, 255, 255)

# Text on the home preview image (one image for all three languages).
OG_NAME = 'Luca Invernizzi'
OG_LINE = 'Music PR, label work and marketing'
OG_PLACE = 'Portfolio · Berlin'
OG_URL = 'invernizziluca.github.io'


def font(size: int, weight: int, width: int = 100) -> ImageFont.FreeTypeFont:
    f = ImageFont.truetype(str(FONT), size)
    f.set_variation_by_axes([weight, width])
    return f


def mark(color=GOLD) -> Image.Image:
    """Logo shape in one colour, cropped to its bounding box."""
    alpha = Image.open(LOGO).convert('RGBA').getchannel('A')
    box = alpha.point(lambda v: 255 if v > 8 else 0).getbbox()
    alpha = alpha.crop(box)
    out = Image.new('RGBA', alpha.size, color + (0,))
    out.putalpha(alpha)
    return out


def fit_square(img: Image.Image, size: int, padding: float = 0.0, background=None) -> Image.Image:
    canvas = Image.new('RGBA', (size, size), (background + (255,)) if background else (0, 0, 0, 0))
    inner = round(size * (1 - 2 * padding))
    scaled = ImageOps.contain(img, (inner, inner), Image.LANCZOS)
    canvas.alpha_composite(scaled, ((size - scaled.width) // 2, (size - scaled.height) // 2))
    return canvas


def rounded(img: Image.Image, radius: int) -> Image.Image:
    mask = Image.new('L', img.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, img.width - 1, img.height - 1), radius, fill=255)
    out = img.convert('RGBA')
    out.putalpha(mask)
    return out


def main() -> None:
    logo = mark()
    brand = PUBLIC / 'images/brand'
    brand.mkdir(parents=True, exist_ok=True)
    for size in (96, 192):
        fit_square(logo, size).save(brand / f'li-mark-{size}.png', optimize=True)
    # Icons on white so they stay visible on dark browser tabs.
    fit_square(logo, 32, padding=0.06, background=WHITE).save(PUBLIC / 'favicon.png', optimize=True)
    fit_square(logo, 180, padding=0.16, background=WHITE).convert('RGB').save(PUBLIC / 'apple-touch-icon.png', optimize=True)

    # Home preview image 1200 x 630
    og = Image.new('RGB', (1200, 630), PAPER)
    draw = ImageDraw.Draw(og)
    small_logo = ImageOps.contain(logo, (76, 76), Image.LANCZOS)
    og.paste(small_logo, (80, 72), small_logo)
    draw.text((80, 200), OG_NAME, font=font(76, 700, 108), fill=NAVY)
    draw.text((82, 312), OG_LINE, font=font(36, 480, 100), fill=NAVY)
    draw.text((82, 364), OG_PLACE, font=font(28, 480, 100), fill=INK_2)
    draw.text((82, 520), OG_URL, font=font(26, 620, 100), fill=TEAL)
    portrait = Image.open(PORTRAIT).convert('RGB')
    target = (360, 450)
    crop = ImageOps.fit(portrait, target, Image.LANCZOS, centering=(0.5, 0.12))
    crop = rounded(crop, 32)
    og.paste(crop, (760, 90), crop)
    (PUBLIC / 'images/og').mkdir(parents=True, exist_ok=True)
    og.save(PUBLIC / 'images/og/home.jpg', quality=86, optimize=True, progressive=True)

    # Badge for the generated case-study previews (scripts/prepare-images.mjs puts it bottom left)
    badge = Image.new('RGBA', (600, 168), (0, 0, 0, 0))
    bd = ImageDraw.Draw(badge)
    name_font = font(34, 640, 104)
    text_w = bd.textlength(OG_NAME, font=name_font)
    pill_w = int(24 + 52 + 16 + text_w + 32)
    bd.rounded_rectangle((48, 48, 48 + pill_w, 48 + 80), 40, fill=WHITE + (255,))
    badge_logo = ImageOps.contain(logo, (52, 52), Image.LANCZOS)
    badge.alpha_composite(badge_logo, (48 + 24, 48 + (80 - badge_logo.height) // 2))
    bd.text((48 + 24 + 52 + 16, 48 + 40), OG_NAME, font=name_font, fill=NAVY, anchor='lm')
    badge.save(ROOT / 'scripts/assets/og-badge.png', optimize=True)
    print('brand assets written')


if __name__ == '__main__':
    main()
