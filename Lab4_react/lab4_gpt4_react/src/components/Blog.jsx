import { blogData } from "../mockData/blogData";

export const ContainerBlog = ({container_blog:{text}}) => {
    return (
        <div className="container_blog">
            <h1 className="title_content_blog">{text}</h1>
        </div>
    )
  };

export const LeftBlockContent = ({left_block_contentData:{image:{src, alt}, date, text, button:{href, title}}}) => {
    return (
        <div class="left_block_content">
            <div class="block_content">
              <img
              className="blog_section__img"
              src={src}
              alt={alt}
              />
              
              <div className="block_text_left">
                <h4 className="date">{date}</h4>
                <h2 className="text_article">{text}</h2>
                <a href={href}className="link_arcticle">{title}</a>
              </div>
            </div>
          </div>
    )
  };

export const RightBlockContent = ({item}) => {

    const {image:{src, alt}, date, text, button:{href, title}} = item

    return(
        <div className="block_content"> 
            <img
            class="blog_section__img"
            src={src}
            alt={alt}
            />
            <div class="block_text_right">
                <h4 class="date">{date}</h4>
                <h2 class="text_article">{text}</h2>
                <a href={href} class="link_arcticle">{title}</a>
            </div>
        </div>
    )
  };



const Blog = () => {

    const{container_blogData, left_block_contentData, right_block_contentData} = blogData    

    return (
        <>
        <ContainerBlog container_blog={container_blogData}/>
        <div class="container_content_blog">
            <LeftBlockContent left_block_contentData={left_block_contentData}/>
            <div class="right_block_content"> 
                {right_block_contentData.map((item, index) => (
                    <RightBlockContent key={index} item={item} />
                ))}
            </div>
        </div>
        </>
    )
}

export default Blog;