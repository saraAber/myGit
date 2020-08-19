import React, { Component } from 'react'
import Axios from 'axios'

class HeaderSuper extends Component {
    componentDidMount() {

        const father={}
        Axios.get('/super/category').then(x => {
            console.log(x)
            //  x.data.map(x=>{
            //     if(father[x.FatherId]===0){
            //         console.log(father);
            //       father[x.FatherId]={}; 
            //       console.log(father); 
            //       father[x.FatherId]['kategory']=[];
            //       console.log(father)
            //     }
                
            //      father[x.fatherName].kategory.push(x);
            //      console.log(father);
            //  });
            
             console.log(father)
        }
        )
    }
    render() {
        return (
            <div class="ui secondary vertical menu">
            <a class="active item">Account</a>
            <a class="item">Settings</a>
            <div role="listbox" aria-expanded="false" class="ui item dropdown" tabindex="0">
                <div aria-atomic="true" aria-live="polite" role="alert" class="divider text">Display Options</div>
                <i aria-hidden="true" class="dropdown icon"></i>
                <div class="menu transition">
                    <div class="header">Text Size</div>
                    <div role="option" class="item">Small</div>
                    <div role="option" class="item">Medium</div>
                    <div role="option" class="item">Large</div>
                </div>
            </div>
        </div>
        )
    }
}

export default HeaderSuper


