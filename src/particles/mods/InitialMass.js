/**
 * Sets initial particle mass value.
 *
 * @cat particles.modifiers
 * @extends Modifier
 */
/* @echo EXPORT */
class InitialMass extends Modifier {
  /**
   * Creates new InitialMass instance.
   *
   * @param {...(number|FloatScatter)} values Min and max values.
   */
  constructor(...values) {
    super();

    /** @type {FloatScatter} Modifier's object to get values from.  */
    this.scatter = FloatScatter.fromObject(...values);
  }

  /**
   * @inheritDoc
   */
  update(emitter, particle, dt) {
    particle.mass = this.scatter.getValue();
  }
}