/* @echo EXPORT */
class Viewport extends MessageDispatcher {
  /**
   * constructor - Description
   *
   * @param {HTMLElement} containerElement Description
   *
   * @return {void} Description
   */
  constructor(containerElement) {
    super();

    /** @type {HTMLElement} */
    this.mContainerElement = containerElement;

    let size = this.mContainerElement.getBoundingClientRect();

    /** @type {Rectangle} */
    this.mSize = new Rectangle(size.left, size.top, size.width, size.height);

    window.addEventListener('resize', x=> this.__onResize());
  }

  __onResize() {
    let size = this.mContainerElement.getBoundingClientRect();
    this.mSize = new Rectangle(size.left, size.top, size.width, size.height);

    this.sendMessage('resize', this.mSize);
  }

  /**
   * size - Description
   *
   * @return {Rectangle} Description
   */
  get size(){
    return this.mSize;
  }

  /**
   * nativeDOM - Description
   *
   * @return {Element} Description
   */
  get nativeDOM(){
    return this.mContainerElement;
  }

  // TODO: dispose, remove resize event
}
