const en = {
    TEXT: "Text in English",
    TEXT_PARAM: "Modyo site.language: {{ value }}"
};

let lang = null;
if (process.env.NODE_ENV === 'production') {
    lang = JSON.parse(`{%raw%}${JSON.stringify(en)}{%endraw%}`);
} else {
    lang = en;
}

export default lang;