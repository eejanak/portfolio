import{g as n,j as e,C as o,a,T as t,L as s,c as l,R as h,N as c}from"./NavBar-dda90537.js";import{R as d,L as i}from"./ReactPlayer-f2c1ab9c.js";import{a as g}from"./YouTube-b140485a.js";import{M as u}from"./mockFooter-f0217858.js";var m=d.createReactPlayer,r=g.default,p=m([{key:"youtube",canPlay:r.canPlay,lazyPlayer:r}]);const f=n(p);function y(){return e.jsx(o,{children:e.jsxs(a,{maxWidth:"md",style:{justifyContent:"center",minHeight:"100vh"},children:[e.jsxs(a,{style:{justifyContent:"center",padding:"10px"},children:[e.jsx(t,{variant:"h1",align:"center",fontWeight:"300",children:"Larva Identifier"}),e.jsx(t,{variant:"h4",gutterBottom:!0,children:"June 2022 - Jan 2023"}),e.jsx(t,{variant:"h6",fontStyle:"italic",children:"Skills and Technologies"}),e.jsx(t,{gutterBottom:!0,children:"Python, Tensorflow, Project Planning"})]}),e.jsx(a,{style:{padding:"5px",maxWidth:"550px",minWidth:"300px"},children:e.jsx("img",{src:"/larvaIdentifier/larvaIdentifierSquare2.jpg",alt:"Example photo of a crab larva collected in the Puget Sound",style:{height:"auto",width:"70%"}})}),e.jsx(t,{align:"center",gutterBottom:!0,children:"Photo of a crab larva in the megalopa stage, that was collected in from the Puger Sound."}),e.jsx(t,{variant:"h6",align:"left",children:"Main Ideas"}),e.jsxs(s,{style:{listStyleType:"disc",paddingLeft:"30px"},dense:!0,children:[e.jsx(i,{style:{display:"list-item"},children:"Built an image classification model that identifies two crab larva stages with 90% accuracy"}),e.jsx(i,{style:{display:"list-item"},children:"Trained the model with TensorFlow Keras on a self‐made database using over 400 images"}),e.jsx(i,{style:{display:"list-item"},children:"Recognized in 2 science and engineering fairs with presentations to panels of judges reflecting on the engineering process and the successes and failures"})]}),e.jsx(t,{align:"justify",gutterBottom:!0,children:"As my research project for my Marine Chemistry course, a four-year research course I participated in during high school, I pursued my interest in artificial intelligence by creating an image classification model for crab larvae. There are two stages of crab larvae, megalopa and zoea. My goal was to be able to distinguish the two types using a model that I trained using photographs of larva from the Puget Sound in Washington."}),e.jsx(t,{variant:"h5",children:"Collection of Crab Larvae"}),e.jsx(t,{align:"justify",gutterBottom:!0,children:"Crab larvae were collected at Point Defiance Marina using a light trap that a previous study had constructed. I brought the crab larvae back to my high school to photograph them with a dissection microscope on 2x power with a Moticam camera. Placing a singular live larva on a depression slide allowed it to be photographed. Five to ten pictures were taken of each larva in different positions and rotations of the organism. A total of 175 photographs of each type of larva were taken and cropped into a square to center the organism."}),e.jsx(t,{variant:"h5",children:"Creating and Training the Neural Network"}),e.jsx(t,{align:"justify",gutterBottom:!0,children:"Using 350 images taken of the larvae, each was named with either megalopae or zoeae in the filename and stored in the corresponding directory. To create a larger sample size, data augmentation was performed. The data augmentation used was flipping the image, rotating the image, zooming into the image, and changing the contrast of the image. The images were adjusted to a ratio of 300 x 300 pixels."}),e.jsx(t,{align:"justify",gutterBottom:!0,children:"To train the convolutional neural network, Python, Tensorflow, and CUDA (Compute Unified Device Architecture) were used. An AMD Ryzen 7 5800X 8-core 3.8 GHz and a NVIDIA GeForce RTX 3070 Ti 8GB GDDR6X were the hardware components used to train the model. A Sequential Keras model was used consisting of four convolution blocks. A total of 100 epochs. with a batch size of 16 images, training was conducted for image classification. A train-test split validation test was used, 80% of the images were used for training and 20% were used for validation."}),e.jsx(t,{variant:"h5",children:"Discussion"}),e.jsx(t,{align:"justify",gutterBottom:!0,children:"Looking at the resulting graphs, training was proven to be successful, however some heavy oscillation in the graphs suggested overfitting. The accuracy ended around 0.9, which for my first machine learning project, I was very happy with. There are many things I would approach differently if I attempted this project today. Learning slightly more about something that interested me a lot was the major goal of this project."}),e.jsx(t,{align:"justify",gutterBottom:!0,children:"There were many obstacles that arose, so I had to learn how to overcome these challenges. Collecting the larvae had many challenges, such as difficulties with the trap working and the camera not photographing the larvae properly. Programming something of this caliber was immense and a major challenge for me. I made slight adjustments to my project as it went on, to make sure my final goal was still accomplished."}),e.jsx(t,{align:"justify",gutterBottom:!0,children:"This project was culminated by me entering two engineering fairs. At these competitions I received multiple awards, including 2nd Place in Robotics and Intelligent Machines at Washington State Science and Engineering Fair, Excellence in Science and Engineering from the Office of Naval Research, and the NOAA Taking the Pulse of the Planet Award."}),e.jsx(t,{align:"justify",gutterBottom:!0,children:"I also gave a presentation at my school as part of the senior symposium for the course this was a part of. If you are interested in listening to my presentation, here is the video:"}),e.jsx(a,{style:{justifyContent:"center",padding:"10px",display:"flex",paddingBottom:"210px"},children:e.jsx("div",{className:"player-wrapper-horizontal",children:e.jsx(f,{width:"100%",height:"230%",controls:!0,url:"https://www.youtube.com/watch?v=8vXXy61q70U?start=138m50s",youtubeConfig:{playerVars:{start:8330}}})})}),e.jsx(t,{align:"center",gutterBottom:!0,children:"If there are any errors with the video playing, my presentation begins at the 2:18:50 mark."}),e.jsx(a,{style:{minHeight:"4vh"}}),e.jsx(u,{})]})})}l.createRoot(document.getElementById("root")).render(e.jsxs(h.StrictMode,{children:[e.jsx(c,{}),e.jsx(y,{})]}));