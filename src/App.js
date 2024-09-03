import { Component } from 'react';

import './App.css';

// function WhoAmI({ name, surname, link }) {
//    return (
//       <div>
//          <h1>
//             My name is {name()}, surname - {surname}
//          </h1>
//          <a href={link}>My profile</a>
//       </div>
//    );
// }

// function App() {
//    return (
//       <div className="App">
//          <WhoAmI
//             name={() => {
//                return 'John';
//             }}
//             surname="Smith"
//             link="facebook.com"
//          />
//          <WhoAmI
//             name={() => {
//                return 'Alex';
//             }}
//             surname="Petrov"
//             link="google.com"
//          />
//       </div>
//    );
// }

class WhoAmI extends Component {
   constructor(props) {
      super(props);
      this.state = {
         years: 27,
         position: '',
      };
   }

   nextYear = () => {
      console.log('+++');
      this.setState((state) => ({
         years: state.years + 1,
      }));
   };

   commitInputChanges = (e, color) => {
      console.log(color);

      this.setState({
         position: e.target.value,
      });
   };

   render() {
      const { name, surname, link } = this.props;
      const { position, years } = this.state;

      return (
         <>
            <button onClick={this.nextYear}>+++</button>
            <h1>
               My name is {name}, surname - {surname}, age - {years}, position -
               {position}
            </h1>
            <a href={link}>My profile</a>
            <form>
               <span>Введіть посаду</span>
               <input
                  type="text"
                  onChange={(e) => this.commitInputChanges(e, 'some color')}
               />
            </form>
         </>
      );
   }
}

function App() {
   return (
      <div className="App">
         <WhoAmI name="John" surname="Snith" link="facenook.com" />
         <WhoAmI name="Ivan" surname="Ivanov" link="instagram.com" />
      </div>
   );
}

export default App;
