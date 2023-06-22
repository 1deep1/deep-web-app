'use client';

export function FlowComponent({ text }) {
  let data = [], step=0, range=30, opacity;
  for (let i=0; i<12; i++) {
    opacity=range-step
    range-=step
    if (i === 0) step=4, opacity=0
    if (i === 2) step=2
    data.push(<FlowText className="" opacityStep={opacity} text={text} key={i} />)
  }
  return data
}

export function FlowText({ opacityStep, className, text }) {
  return <h1 className={`text-[150px] ${className} hidden md:block`} style={ {opacity: opacityStep*0.01} }>{text}</h1>
}
