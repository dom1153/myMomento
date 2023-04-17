function shuffle() {
    const assets = [
        { image: '/assets/css.png' },
        { image: '/assets/html5.png' },
        { image: '/assets/jquery.png' },
        { image: '/assets/js.png' },
        { image: '/assets/next.png' },
        { image: '/assets/node.png' },
        { image: '/assets/react.png' },
        { image: '/assets/ts.png' },
    ];
    let lst = [...assets, ...assets]; // need each card twice
    lst.sort(() => Math.random()); // shuffle
    // spread syntax only is useful here if card becomes an object,
    // does nothing if only an image asset
    return lst.map((card) => ({ ...card, id: Math.random()}));
}

export default shuffle;