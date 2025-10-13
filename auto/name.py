import os

def rename_images_to_sofa(directory):
    # List image files with common extensions
    files = [f for f in os.listdir(directory) if f.lower().endswith(('.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'))]
    
    # Sort files to have a consistent order
    files.sort()
    
    # Rename each file to sofa{i} with the original extension
    for i, filename in enumerate(files, start=1):
        extension = os.path.splitext(filename)[1]  # Get file extension
        new_name = f"Furniture_{i}{extension}"
        old_path = os.path.join(directory, filename)
        new_path = os.path.join(directory, new_name)
        os.rename(old_path, new_path)
        print(f"Renamed '{filename}' to '{new_name}'")

# Example usage: replace with your folder path
rename_images_to_sofa('static/furnitures/Tables and cabinets')
