import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CreateTicket = ({ onCancel }) => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const { createTicket } = useContext(AppContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!subject || !message) {
            setError('Please fill in all fields');
            return;
        }

        if (message.length < 10) {
            setError('Message must be at least 10 characters');
            return;
        }

        try {
            await createTicket({ subject, message });
            onCancel();
        } catch (err) {
            setError(err.message || 'Failed to create ticket');
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Create New Ticket</h2>
            
            {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}
            
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                        Subject
                    </label>
                    <input
                        id="subject"
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows="5"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    {message.length < 10 && (
                        <p className="text-red-500 text-xs italic">Message must be at least 10 characters</p>
                    )}
                </div>
                
                <div className="flex justify-end space-x-4">
                    <button
                        type="button"
                        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit Ticket
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTicket;