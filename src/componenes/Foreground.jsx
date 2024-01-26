import React, { useRef } from 'react'
import Cards from './Cards'

function Foreground() {
    const ref = useRef(null)
    const data = [{
        desc: "Hello kiya hal hain.",
        filesize: '.9mb',
        close: false,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    }, {
        desc: "Hello kiya hal hain.",
        filesize: '.9mb',
        close: false,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    }, {
        desc: "Hello kiya hal hain.",
        filesize: '.9mb',
        close: false,
        tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    }]
    return (
        <>
            <div ref={ref} className="fixed top-0 left-0 w-full z-[3] h-full flex flex-wrap gap-10 p-5 ">
                {data.map((item, ind) => (
                    // Add the return statement here
                    <Cards key={ind} data={item} refrence={ref} />
                ))}
            </div>
        </>
    )
}

export default Foreground

// import React from 'react';
// import Cards from './Cards';

// function Foreground() {
//     const data = [{
//         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, molestiae. Nisi, eligendi? Laborum id molestias",
//         filesize: '.9mb',
//         close: true,
//         tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
//     }];

//     return (
//         <>
//             <div className="fixed top-0 left-0 w-full z-[3] h-full ">
// {data.map((item, ind) => (
//     // Add the return statement here
//     <Cards key={ind} data={item} />
// ))}
//             </div>
//         </>
//     );
// }

// export default Foreground;
