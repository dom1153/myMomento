// for debugging
const DO_SHUFFLE = true;

function shuffle() {
    const assets = [
        { image: '/assets/css.png' },
        { image: '/assets/html5.png' },
        { image: '/assets/jquery.png' },
        { image: '/assets/js.png' },
        { image: '/assets/next_light.png' },
        { image: '/assets/node.png' },
        { image: '/assets/dart.png' },
        { image: '/assets/ts.png' },
    ];
    let lst = [...assets, ...assets]; // need each card twice
    if (DO_SHUFFLE) {
        lst.sort(() => Math.random() - 0.5); // shuffle
        // sort looks for >0 <0 or ==0 to swap items.
        // .random() produces 0 to 1
        // .random() - 0.5 produces positive and negative values
    }
    // spread is needed here else we get {{ image: 'blah' } , id: Math.random()}
    return lst.map((card) => ({ ...card, id: Math.random()}));

    // // short version
    // return [...assets, ...assets]
    //     .sort(() => (Math.random() - 0.5))
    //     .map((card) => ({...card, id: Math.random()}));
}

export default shuffle;