import React, {Component} from 'react';
import ContactBook from "./ContactBook/ContactBook";
import ApiComponent from "./ApiComponent/ApiComponent";
import DropDown from "./DropDown/DropDown";


class App extends Component {
    render() {
        return (
            <div>
                <h3 className='text-center mb-8 mt-8 text-red-600 font-bold'>Task 1</h3>
              <ContactBook />
                <h3 className='text-center mb-8 mt-8 text-red-600 font-bold'>Task 2</h3>
                <ApiComponent />
                <h3 className='text-center mb-8 mt-8 text-red-600 font-bold'>Task 3</h3>
                <DropDown />
            </div>
        );
    }
}

export default App;