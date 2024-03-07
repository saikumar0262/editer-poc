import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface IData {
    ID: string;
    Subject: string;
    Body: string;
}

const data: IData = {
    ID: "24567",
    Subject: "Quantum Mechanics Exploration",
    Body: "Greetings explorers! In our quest to unravel the mysteries of the quantum realm, let's delve into the mind-bending world of superposition and entanglement. Buckle up for a journey where particles can exist in multiple states simultaneously, and actions on one can instantaneously affect another, regardless of distance. Share your thoughts and theories as we navigate this perplexing yet fascinating domain",
};

const Editor: React.FC = () => {
    
    
    const { handleSubmit, control } = useForm();


    const onSubmit = (formData: IData) => {


        console.log('Form data:', formData);
    };

    return (
        <div className="container mx-auto max-w-7xl px-4 min-h-screen justify-around grid h-full gap-14 grid-flow-col grid-cols-2 items-center">
            {/* Preview */}
            <div key={data.ID} className='border-2 p-6 rounded-md shadow-md min-h-96'>
                <div className='mb-4'>
                    <h1 className='text-xl font-semibold'>Subject:</h1>
                    <p className='text-gray-700'>{data.Subject}</p>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-xl font-semibold'>Body:</h1>
                    <p className='text-gray-700 flex-grow'>{data.Body}</p>
                </div>
            </div>
            {/* Editable Preview */}
            <div className='w-full'>
                <form onSubmit={handleSubmit(onSubmit)} className='bg-white p-4 rounded-md shadow-md'>
                    <div className='mb-4'>
                        <label htmlFor="subject" className='block text-sm font-semibold text-gray-600'>Subject:</label>
                        <Controller
                            name="subject"
                            control={control}
                            defaultValue={data.Subject}
                            render={({ field }) => (
                                <input
                                    onChange={(e) => field.onChange(e.target.value)}
                                    value={field.value}
                                    type="text"
                                    className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
                                    placeholder="Enter subject"
                                />
                            )}
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="body" className='block text-sm font-semibold text-gray-600'>Body:</label>
                        <Controller
                            name="body"
                            control={control}
                            defaultValue={data.Body}
                            render={({ field }) => (
                                <textarea
                                    onChange={(e) => field.onChange(e.target.value)}
                                    value={field.value}
                                    className='w-full min-h-52 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
                                    placeholder="Enter body"
                                />
                            )}
                        />
                    </div>
                    <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Editor;

