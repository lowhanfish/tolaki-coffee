"use client";

import React from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import base style

interface InputFieldProps {
    title?: string;
    onChange: (value: string) => void;
    value: string;
}

const InputRichText = ({ title, value, onChange }: InputFieldProps) => {

    // Fungsi opsional jika ingin handle upload ke server Anda sendiri (misal FastAPI)
    const handleImageUploadBefore = (files: any[], info: any, uploadHandler: any) => {
        // Jika ingin langsung diconvert ke Base64 (tanpa simpan ke server), return true
        return true;

        /* // CONTOH JIKA INGIN UPLOAD KE SERVER:
        const formData = new FormData();
        formData.append('file', files[0]);
        
        fetch('https://api.anda.com/upload', { method: 'POST', body: formData })
            .then(res => res.json())
            .then(data => {
                const response = { url: data.url, size: files[0].size };
                uploadHandler(response);
            });
        */
    };

    return (
        <div className="flex w-full flex-col">
            {title && (
                <p className="text-[11px] font-bold text-neutral-400 mb-1">{title}</p>
            )}

            <div className="border-[0.1px] border-neutral-200 dark:border-neutral-700 rounded-sm overflow-hidden">
                <SunEditor
                    setContents={value}
                    onChange={onChange}
                    onImageUploadBefore={handleImageUploadBefore}
                    setOptions={{
                        height: 'auto',
                        minHeight: '200px',
                        // Menentukan tombol apa saja yang muncul di toolbar
                        buttonList: [
                            ['undo', 'redo'],
                            ['formatBlock', 'font'],
                            ['bold', 'underline', 'italic', 'strike'],
                            ['list', 'align'],
                            ['image', 'link', 'video'], // Fitur multimedia
                            ['fullScreen', 'codeView']
                        ],
                        // Pengaturan resize gambar bawaan SunEditor
                        imageResizing: true,
                        imageWidth: '100%',
                    }}
                />
            </div>
        </div>
    );
};

export default InputRichText;