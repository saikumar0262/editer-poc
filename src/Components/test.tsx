import React, { useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill CSS
import { Controller, useForm } from 'react-hook-form';

export const MyForm = () => {
    const { control, handleSubmit } = useForm();
    const quillRef = useRef(null);
    useEffect(() => {
        if (quillRef.current) {
            const quill = quillRef.current.getEditor();
            const htmlContent = '<p>React Hook for Quill!</p>';
            quill.format('size', 'normal')
            const delta = quill.clipboard.convert(htmlContent); // Convert HTML to Delta
            quill.setContents(delta); // Set Delta as editor content
        }
    }, [quillRef]);


    const onSubmit = (data) => {
        console.log("data",data); // Handle form submission with Quill data
    };
    // const defaultContent = { ops: [{ insert: 'Default content\n' }] }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Controller
                    name="edit"
                    control={control}
                    defaultValue="fdojoidjf"// Set default value to empty string
                    render={({ field }) => (
                        <ReactQuill
                            ref={quillRef}
                            onChange={(content, delta, source, editor) =>  {const textContent = editor.getText();
                                field.onChange(textContent);}} // Update form value with Quill data
                            theme="snow"
                        />
                    )}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};
