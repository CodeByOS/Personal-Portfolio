'use client';
import React, { useState, FormEvent } from 'react'
import MagicButton from './ui/MagicButton'
import emailjs from '@emailjs/browser'

const Contact: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean | null>(null)

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!email || !message) {
            alert('Please fill in both fields.')
            return
        }

        setLoading(true)
        try {
            await emailjs.send(
            serviceId,
            templateId,
            {
                from_email: email,
                message,
            },
            publicKey
        )
            setSuccess(true)
            setEmail('')
            setMessage('')
        } catch (error) {
            console.error('Failed to send email:', error)
            setSuccess(false)
        }
        setLoading(false)
}

  return (
    <div className="py-20" id="contact">
        <h1 className="heading">
            Contact
            <span className="text-purple-400 font-bold"> me now</span>
        </h1>

    <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-lg mx-auto gap-6 mt-8"
    >
        <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded border border-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Your email"
        />

        <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded border border-gray-300 resize-none h-32"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            aria-label="Your message"
        />

        <div className="flex justify-center">
            <MagicButton
                title={loading ? 'Sending...' : 'Submit'}
                type="submit"
                disabled={loading}
                otherClasses="w-fit"
            />
        </div>
    </form>

    {success === true && (
        <p className="text-green-500 mt-4 text-center">Message sent successfully!</p>
    )}
    {success === false && (
        <p className="text-red-500 mt-4 text-center">Failed to send message. Try again.</p>
    )}
    </div>
  )
}

export default Contact
