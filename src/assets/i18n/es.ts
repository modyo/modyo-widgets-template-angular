const es = {
    TEXT: "Texto en español",
    TEXT_PARAM: "Modyo site.language: {{ value }}"
};

let lang = null;
if (process.env.NODE_ENV === 'production') {
    lang = JSON.parse(`{%raw%}${JSON.stringify(es)}{%endraw%}`);
} else {
    lang = es;
}

export default lang;