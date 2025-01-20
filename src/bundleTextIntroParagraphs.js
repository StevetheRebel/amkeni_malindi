export const bundleTextIntoParagraphs = (text, sentencesPerParagraph = 4) => {

    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];

    const paragraphBundles = [];
    for (let i = 0; i < sentences.length; i += sentencesPerParagraph) {
        paragraphBundles.push(sentences.slice(i, i + sentencesPerParagraph).join(" ").trim());
    }

    return paragraphBundles;
};
