function Parent() {
    const randomColor = getRandomColor();
    const [color, setColor] = useState(randomColor);
    const [childrenColor, setChildrenColor] = useState("#FFF");

    function handleChangeColor(newChildColor) {
        setColor(getRandomColor());
        setChildrenColor(newChildColor);
    }

    return ( <
        div className = "parent"
        style = {
            { backgroundColor: color } } >

        <
        Child color = { childrenColor }
        onChangeColor = { handleChangeColor }
        /> <
        Child color = { childrenColor }
        onChangeColor = { handleChangeColor }
        /> <
        /div>
    );
}

export default Parent;