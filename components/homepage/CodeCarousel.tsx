'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Sample JavaScript code snippets for the carousel
const sampleCode = [
  {
    code: `
function calculateSum(a, b) {
  const sum = a + b;
  console.log('Sum:', sum);
  return sum;
}
calculateSum(5, 3);
`,
  },
  {
    code: `
function greet(name) {
  console.log('Hello, ' + name');
  return true;
}
greet('World');
`,
  },
  {
    code: `
const multiply = (x, y) => {
  const result = x * y;
  console.log('Product:', result);
  return result;
};
multiply(4, 5);
`,
  },
];

export default function CodeCarousel() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    // easing: "linear",
    cssEase: "linear",
  };

  return (
    <div className="w-full max-w-[600px] p-4 text-white">
      <Slider {...settings} className="code-carousel">
        {sampleCode.map((item, index) => (
          <div key={index} className="px-2 py-1">
            <div className="p-4">
              <SyntaxHighlighter
                language="javascript"
                style={okaidia}
                customStyle={{
                  margin: 0,
                  padding: '1rem',
                  background: 'transparent',
                  borderRadius: '0.75rem',
                }}
              >
                {item.code.trim()}
              </SyntaxHighlighter>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
