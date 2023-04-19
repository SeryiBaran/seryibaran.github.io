const headings = document.querySelectorAll(
  ":where(h1, h2, h3, h4, h5, h6):not(.post-title)"
);

headings.forEach(heading => {
  const link = document.createElement("a");
  link.innerHTML = "#";
  link.href =
    window.location.href.replace(window.location.hash, "") + `#${heading.id}`;
  link.title =
    "Перейти к этому заголовку\n\nМожно будет скопировать ссылку в браузере и\nкому-то отправить";

  heading.prepend(link);
});
