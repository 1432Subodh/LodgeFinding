"use client"

import { useRef, useState } from "react";
import { useDropzone, Accept } from "react-dropzone";
import { motion } from "framer-motion";
import { Upload, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { itemVariants } from "../../../../../lib/animations";
import { LodgeFormData } from "../../../../../types/lodgeTypes";
import { Control, useController } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

interface UploadImageProps {
  control: Control<LodgeFormData>;
}

export default function ImageUpload({ control }: UploadImageProps) {
  const {
    field: { onChange, value },
  } = useController({ name: "images", control });
  const {
    field: { onChange: onLinkChange, value: linkValue },
  } = useController({ name: "imageAddress", control });
  
  const checkbox = useRef(null);
  const [files, setFiles] = useState<File[]>(value || []);
  const [useImageLink, setUseImageLink] = useState(false);

  const onDrop = (acceptedFiles: File[]) => {
    if (files.length + acceptedFiles.length > 3) return;
    setFiles((prev) => [...prev, ...acceptedFiles]);
    onChange([...files, ...acceptedFiles]);
  };

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onChange(newFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
    accept: { "image/*": [] } as Accept,
    maxFiles: 3,
  });

  return (
    <>
      <motion.div variants={itemVariants} className="space-y-4">
        <h3 className="text-lg font-semibold">Lodge Images ({files.length}/3)</h3>
        <FormItem>
          <FormControl>
            <Checkbox
              checked={useImageLink}
              onCheckedChange={() => setUseImageLink(!useImageLink)}
            />
          </FormControl>
          <FormLabel>Upload via Image Link</FormLabel>
        </FormItem>
        
        {useImageLink ? (
          <Textarea
            placeholder="Enter image URL"
            value={linkValue}
            onChange={(e) => onLinkChange(e.target.value)}
          />
        ) : (
          <div
            {...getRootProps()}
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer"
          >
            <input {...getInputProps()} />
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="text-sm text-gray-500 mt-2">Drag & Drop images here, or click to select files (Max: 3)</p>
          </div>
        )}
        
        {files.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {files.map((file, index) => (
              <div key={index} className="relative w-24 h-24 border rounded overflow-hidden">
                <img
                  src={URL.createObjectURL(file)}
                  alt="Uploaded preview"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => removeFile(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                >
                  <Trash className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </>
  );
}
