from PIL import Image, ImageChops

def trim(im):
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

def extract_logos():
    img = Image.open('/home/soumya/.gemini/antigravity/brain/7d71727c-2d5a-4469-bfec-1138bad48423/uploaded_image_1775980389608.png')
    w, h = img.size
    
    # Define approximate regions based on the 1024x446 image
    # These are rough estimates to help the script focus
    logos = []
    
    # Row 1 (5 logos)
    y1, y2 = 0, 110
    for i in range(5):
        x1, x2 = i * (w // 5), (i + 1) * (w // 5)
        logos.append(('logo_' + ['hyland', 'jll', 'cbre', 'cognizant', 'manipal'][i], (x1, y1, x2, y2)))
        
    # Row 2 (3 logos)
    y1, y2 = 140, 290
    for i in range(3):
        # They are somewhat centered
        x_start = 150
        x_width = 250
        x_gap = 20
        x1 = x_start + i * (x_width + x_gap)
        x2 = x1 + x_width
        logos.append(('logo_' + ['standard_chartered', 'ey', 'lt'][i], (x1, y1, x2, y2)))
        
    # Row 3 (6 logos)
    y1, y2 = 330, 446
    for i in range(6):
        x1, x2 = i * (w // 6), (i + 1) * (w // 6)
        logos.append(('logo_' + ['ambuja_neotia', 'aditya_birla', 'bt', 'tata', 'jio', 'iss'][i], (x1, y1, x2, y2)))

    for name, bbox in logos:
        crop = img.crop(bbox)
        # Try to trim whitespace/background
        # Find background color at corner
        # crop = trim(crop) # Trim might be too aggressive if bg is complex
        crop.save(f'/home/soumya/Desktop/Personal Projects/Freelance/achintya-interior-and-floor-soluations/public/assets/{name}.png')
        print(f'Saved {name}.png')

if __name__ == '__main__':
    extract_logos()
