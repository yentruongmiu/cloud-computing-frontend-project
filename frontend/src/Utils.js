export function loadScript(src) {
  const script = document.createElement('script');
  script.async = true;
  script.src = src;
  script.type = "text/javascript";
  document.getElementsByTagName('body')[0].appendChild(script);
}