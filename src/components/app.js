import React, { Component } from "react";

import { BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Header";
import TopStories from "./TopStories";
import NewStories from "./NewStories";
import { ThemeProvider } from "./../context";
import Comments from './Comments'

export class App extends Component {
   state = {
      theme: "light",
      switchTheme: () => {
         this.setState(prevstate => {
            const newTheme = prevstate.theme === "light" ? "dark" : "light";
            return { theme: newTheme };
         });
      }
   };

   render() {
      
      return (
          <div className={`wrapper bg-${this.state.theme}`} >

          
         <div className={`main-container  bg-${this.state.theme}`} >
            <ThemeProvider value={this.state}>
               <BrowserRouter>
                  <Header />
                  <Switch>
                  <Route exact path="/" component={TopStories} />
                  <Route path="/news" component={NewStories} />
                  <Route path="/comments/:id" component={Comments}/>
                  </Switch>
               </BrowserRouter>
            </ThemeProvider>
         </div>
         </div>
      );
   }
}

export default App;
