import React from "react";
import { Link } from "react-router-dom";
import { ThemeConsumer } from "../context";

function Story(props) {
   const { by, title, time, url, kids, id } = props.info;
   let created = new Date(time * 1000).toLocaleDateString("cs-CZ", {
      hour: "numeric",
      minute: "numeric"
   });

   // hook for UI change only if user click on the link - article would be shown as visited
   const [isVisited, setVisited] = React.useState(false);

   return (
      <ThemeConsumer>
         {({ theme }) => (
            <article className={`story ${theme}`}>
               <header className="story-header">
                  <a className="headline"
                     href={url}
                     target="_blank"
                     rel="noopener noreferrer"
                     onMouseDown={(event) => {if(event.button!==2) setVisited(true)}}
                     
                  >
                     <h1 >{title}</h1>
                  </a>
               </header>
               {isVisited ? <div className="visited-label">VISITED</div> : null}
               <footer className="story-footer">
                  <div className="flex story-info">
                     <div className="author">
                        <span>posted by: </span> <span className='author-name'>{by}</span>
                     </div>
                     <div className="time-info">
                        <time>{created}</time>
                     </div>
                     <div className="story-comments">
                        {kids ? (
                           <React.Fragment>
                              <span> comments: {kids.length} </span>

                              <Link to={`/comments/${id}`}> show </Link>
                           </React.Fragment>
                        ) : (
                           "comments 0"
                        )}
                     </div>
                  </div>
               </footer>
            </article>
         )}
      </ThemeConsumer>
   );
}

export default Story;
