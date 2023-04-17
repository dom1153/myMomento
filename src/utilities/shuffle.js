function shuffle() {
    const assets = [
        { image: '/assets/css.png' },
        { image: '/assets/html5.png' },
        { image: '/assets/jquery.png' },
        { image: '/assets/js.png' },
        { image: '/assets/next_light.png' },
        { image: '/assets/node.png' },
        { image: '/assets/react.png' },
        { image: '/assets/ts.png' },
    ];
    let lst = [...assets, ...assets]; // need each card twice
    lst.sort(() => Math.random()); // shuffle
    // spread is needed here else we get {{ image: 'blah' } , id: Math.random()}
    return lst.map((card) => ({ ...card, id: Math.random()}));

    // return [...assets, ...assets]
    //     .sort(() => (Math.random() - 0.5))
    //     .map((card) => ({...card, id: Math.random()}));
}

export default shuffle;