import Together from 'together-ai';

const together = new Together({ 
    apiKey: import.meta.env.VITE_TOGETHER_API_KEY 
});

export async function generateImage(prompt) {
    try {
        const response = await together.images.create({
            model: "black-forest-labs/FLUX.1-schnell-Free",
            prompt: `detailed coloring page design, ${prompt}, black and white line art, clean outlines, no shading, perfect for coloring, detailed illustration style, high contrast black lines on white background, professional coloring book style, clear and printable quality`,
            width: 1024,
            height: 1024,
            steps: 4,
            n: 1,
            response_format: "b64_json"
        });
        
        return response.data[0].b64_json;
    } catch (error) {
        console.error('Error generating coloring page:', error);
        throw error;
    }
}