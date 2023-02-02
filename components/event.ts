function subscribe(eventName: any, listener: (this: Document, ev: any) => any) {
  document.addEventListener(eventName, listener);
}

function unsubscribe(
  eventName: any,
  listener: (this: Document, ev: any) => any
) {
  document.removeEventListener(eventName, listener);
}

function publish(eventName: string, data: any) {
  const event = new CustomEvent(eventName, { detail: data });
  document.dispatchEvent(event);
}

export { publish, subscribe, unsubscribe };
