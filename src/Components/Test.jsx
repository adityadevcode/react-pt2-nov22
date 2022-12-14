// import React from 'react'

// function test() {
//   return (
//     <div>
//         <h3>test</h3>
//     </div>
//   )
// }

// export default test;

// useeffect:
// class component tisukunte life cycel methods
// react comp lifecycle:mounting, updating, unmounting 3 stages
// oka component ni 3 lifecycle phase kinda divide chesaru
// component ki asalu life cycle methods endukante manaki Dom ki conncet ayedanki
// life cycle methods dwara dom structure loki form avuthundi
// dom loki mana compnent inject cheyali petali s0, component ni define chesi rendering chestam dani kosam e life cycel methods
//  oka cmponent kavali ante mounting vadu ante unmounting
// react ki lifecycel methods vunai andulo 3 phases vunai 
// a react comp mounts when it render to the dom first time, if it already mounted, a component can be rendered again if it needs
// to change its appearance or content

// In mounting phase we have different methods
// constructor()
// getDerivedStateFromProps()
// componentWillMount()
// render ()
// componentDidMount() by default it will call compnentdidmount only once by default
// did and will mount will be called first followed by render()method and finally componentDidMount()

// Updating phase lo different methods
// getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()

// unmounting phase lo diff methods
// componentWillUnmount it is called before comp is removed from the DOM.
// componentWillUnmount() used to do any necessary cleanup (canceling any timers or intervals)
// all above are class component life cycle methods

// functiona comp hooks
// useEffect hook we can acheive life cycle methods
// useefect hook ki 2 parameters (1 parameter vachi call back function and second emoty array)
// useEffect(() => {
//     console.log('DidMount')
// }, []);



// import React, {useEffect, useState} from 'react';

// function Useeffstate() {
//     const List =[1,2,3,4]
//     useEffect(() => {
//         console.log("xyz")
//     }, []);

//     return
//     <>
//     <ul>

//     </ul>
//     </>
// }


// export default Useeffstate;




//  function Useeffstate() {
//   return (
//     <div>
//         <h3>welcome</h3>
//     </div>
//   )
// }

// state update avuthe component rerender avuthundi




// import React from 'react'
import React, {useEffect, useState} from 'react';

 function Test() {
    // const list = [1,2,3,4];
    const [listValues, setListValues] =useState([1,2,3,4]);
   
    useEffect(() => { //idi component did mount application initialize ayinapudu load avuthundi
        console.log('DidMount')
        // indulo ekuva em chestam and data backend nundi techukovali, ajax calls kavali 
    }, []);

    // pyna life depency tisetha ante component will receive props
// useEffect(() => {
//     console.log('component will receive props');
// });

//ipdud dependency change cheyali konni dependencies change ayithe work avali ante
// listvalues change ayina pprathi sari useeffect run avuthundi
// useEffect(() => {
//       console.log('component will receive props');
// }, [listValues]);

//with above 3 we will control entire app
//oka empty array okati no array, array with dependencies

//component motham render avakunda apali ante usememo
    const btnClickHandler = () => {
        const list = [...listValues];
        // vunna state values 1234  destructure chesi kotha values ni add chedam
        list.push(list.length+1);
     setListValues(list);
    }

  return (
    <>
    <ul>
        {
            listValues.map((item) => {
                return<li>{item}</li>
            })
        }
    </ul>
    <button onClick={btnClickHandler} >Add new value</button>
    </>
  )
}


export default Test;