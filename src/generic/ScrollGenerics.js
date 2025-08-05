export const onClickScroll = (direction, ref) => {
    ref.current.scrollBy({left: direction *500, behavior:"smooth"})
  }
