import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import posts from './../../posts';

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === postId);

  const splitIntoParagraphs = (content, sentencesPerParagraph = 8) => {

    const sentences = content.match(/[^.!?]+[.!?]/g) || [content]

    const paragraph = []

    for (let i = 0; i < sentences.length; i += sentencesPerParagraph) {
      paragraph.push(sentences.slice(i, i + sentencesPerParagraph).join(' '))
    }

    return paragraph;
  }

  const paragraphs = splitIntoParagraphs(post.content)

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div className='relative select-none px-4 top-[154px] xs:top-[160px] sm:top-36 lg:px-[6%]'>
      <h1 className='h1-text text-center font-bold'>{post.title}</h1>
      {/* <p className='body-text text-justified'>{paragraphs}</p> */}
      {paragraphs.map((para, index) => (
        <p key={index} className='body-text text-justify'>{para}</p>
      ))}

      {/* Related Posts */}
      <h3 className='h3-text '>Related Posts</h3>
      <ul>
        {posts
          .filter((p) => p.id !== postId)
          .slice(0, 3)
          .map((relatedPost) => (
            <li key={relatedPost.id} onClick={() => navigate(`/blog/${relatedPost.id}`)}>
              {relatedPost.title}
            </li>
          ))}
      </ul>

      {/* Navigation Options */}
      <button onClick={() => navigate('/')} className='py-2 px-4 bg-primary/70 hover:bg-primary rounded-2xl'>Back to Home</button>
      <button onClick={() => navigate('/news-blog')} className='py-2 px-4 bg-primary/70 hover:bg-primary rounded-2xl'>Back to News & Blog</button>
    </div>
  );
};

export default BlogPost;
