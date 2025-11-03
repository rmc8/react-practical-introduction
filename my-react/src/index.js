import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './chap02/class.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

// setInterval(() => {
//   root.render(
//     <>
//       <p>こんにちは、世界！</p>
//       <p>現在時刻：{(new Date()).toLocaleString()}</p>
//     </>
//   )
// }, 1000);

// const name = "鈴木";
// root.render(
//   <p>こんにちは、{name}です！</p>
// );


// const content = `<h3>Wingsプロジェクト</h3>
//   <img src="https://wings.msn.to/image/wings.jpg" />`;
// root.render(
//   <p dangerouslySetInnerHTML={{ __html: content }}></p>
// );

// root.render(
//   <div>{"Tom \u0026 Jerry"}</div>
// )


// root.render(
//   <ul>
//     <li>{true}</li>
//     <li>{false}</li>
//     <li>{null}</li>
//     <li>{undefined}</li>
//     <li>{0}</li>
//     <li>{String(true)}</li>
//   </ul>
// )

// const dest = "https://ja.react.dev";
// root.render(
//   <a href={dest + '/docs'}>React本家サイト</a>
// )

// const attrs = {
//   href: "https://wings.msn.to/",
//   download: false,
//   target: "_blank",
//   rel: "help",
// };

// root.render(
//   <a {...attrs}>サポートページ</a>
// )

// const props = {
//   color: "White",
//   backgroundColor: "Blue",
//   padding: 8
// };
// root.render(
//   <p style={props}>Wingsプロジェクト</p>
// );

root.render(
  <p className="hoge">Hello World!</p>
)

reportWebVitals();
