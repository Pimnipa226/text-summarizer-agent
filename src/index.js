export const textSummarizer = async (event, context) => {
    const { text } = event.payload.inputs;

    if (!text || text.trim() === '') {
        return { output: 'Please provide the text you would like me to summarize.' };
    }

    // A simple summarization example (you can enhance it with AI logic)
    const sentences = text.split('.').filter(Boolean);
    let summary;

    if (sentences.length <= 2) {
        summary = text;
    } else {
        summary = sentences.slice(0, 2).join('.') + '.';
    }

    return {
        output: `Here’s a summary:\n\n${summary}`,
    };
};
