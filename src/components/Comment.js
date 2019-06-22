import React from "react";
import { ThemeConsumer } from "../context";

function Comment({ by, time, text }) {
   const created = new Date(time * 1000).toLocaleDateString("cs-CZ", {
      hour: "numeric",
      minute: "numeric"
   });
   return (
      <ThemeConsumer>
         {({ theme }) => (
            <div className={`comment comment-${theme}`}>
               <div className="comment-info">
                  <span className="comment-author">by: {by}</span>
                  <time> on {created}</time>
               </div>
               <div className="comment-text">
                  <p className='inner-text' dangerouslySetInnerHTML={{ __html: text }} />
               </div>
            </div>
         )}
      </ThemeConsumer>
   );
}

export default Comment;
