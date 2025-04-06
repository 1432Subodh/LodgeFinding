'use client';
import React, { useState, ChangeEvent } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const ImageUploadWithPreview: React.FC = () => {
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [additionalImages, setAdditionalImages] = useState<string[]>([]);
  const [additionalFiles, setAdditionalFiles] = useState<File[]>([]);

  const handleThumbnailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      const reader = new FileReader();
      reader.onload = () => {
        setThumbnailPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else if (file) {
      alert("File size exceeds 2MB limit");
    }
  };

  const deleteThumbnail = (): void => {
    setThumbnailPreview(null);
    const input = document.getElementById('thumbnailImage') as HTMLInputElement;
    if (input) input.value = '';
  };

  const handleAdditionalImagesChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;
    if (!files) return;

    const filesArray = Array.from(files);
    if (filesArray.length + additionalFiles.length > 10) {
      alert("You can only upload up to 10 images");
      return;
    }

    const newPreviews: string[] = [];
    const newFiles: File[] = [];

    filesArray.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          newPreviews.push(event.target.result as string);
          newFiles.push(file);

          if (newPreviews.length === filesArray.length) {
            setAdditionalImages(prev => [...prev, ...newPreviews]);
            setAdditionalFiles(prev => [...prev, ...newFiles]);
          }
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const deleteAllAdditionalImages = (): void => {
    setAdditionalImages([]);
    setAdditionalFiles([]);
    const input = document.getElementById('images') as HTMLInputElement;
    if (input) input.value = '';
  };

  return (
    <div className="space-y-6">
      {/* Thumbnail Upload */}
      <div className="space-y-1">
        <Label htmlFor="thumbnailImage">Thumbnail Image <span className="text-red-500">*</span></Label>
        <div className="grid w-full items-center gap-1.5">
          <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
            <Input 
              id="thumbnailImage" 
              name="thumbnailImage" 
              type="file" 
              accept="image/*" 
              className="cursor-pointer hidden" 
              required 
              onChange={handleThumbnailChange}
            />
            <Label htmlFor="thumbnailImage" className="cursor-pointer flex flex-col items-center justify-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
              <span className="text-sm font-medium">Click to upload thumbnail</span>
              <span className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (Max. 2MB)</span>
            </Label>
          </div>
        </div>
      </div>

      {/* Thumbnail Preview */}
      {thumbnailPreview && (
        <div className="mt-2">
          <div className="flex items-center">
            <div className="relative mr-2 border rounded-md p-1 h-20 w-20">
              <img src={thumbnailPreview} alt="Thumbnail preview" className="h-full w-full object-cover" />
              <button 
                type="button"
                onClick={deleteThumbnail}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 w-5 h-5 flex items-center justify-center"
                aria-label="Delete thumbnail"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18"></path>
                  <path d="M6 6L18 18"></path>
                </svg>
              </button>
            </div>
            <span className="text-sm text-gray-500">Thumbnail</span>
          </div>
        </div>
      )}

      {/* Additional Images Upload */}
      <div className="space-y-1">
        <Label htmlFor="images">Additional Images</Label>
        <div className="grid w-full items-center gap-1.5">
          <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
            <Input 
              id="images" 
              name="images" 
              type="file" 
              accept="image/*" 
              multiple 
              className="cursor-pointer hidden" 
              onChange={handleAdditionalImagesChange}
            />
            <Label htmlFor="images" className="cursor-pointer flex flex-col items-center justify-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-images">
                <path d="M8 6H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                <path d="M18 16V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12" />
                <circle cx="10" cy="10" r="3" />
                <path d="m20 10-1.5-1.5L16 11" />
              </svg>
              <span className="text-sm font-medium">Click to upload multiple images</span>
              <span className="text-xs text-muted-foreground">Upload up to 10 images</span>
            </Label>
          </div>
        </div>
      </div>

      {/* Additional Images Preview + Delete All Button */}
      {additionalImages.length > 0 && (
        <div className="mt-2 space-y-2">
          <div className="flex flex-wrap gap-2">
            {additionalImages.map((image, index) => (
              <div key={index} className="border rounded-md p-1 h-20 w-20">
                <img src={image} alt={`Additional image ${index + 1}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={deleteAllAdditionalImages}
            className="mt-2 inline-flex items-center gap-1 px-3 py-1.5 bg-red-600 text-white text-sm rounded-md hover:bg-red-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
            Delete All Images
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploadWithPreview;
