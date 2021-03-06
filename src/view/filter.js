import {createElement} from "../utils.js";

export default class Filter {
  constructor(filterItems) {
    this._element = null;
    this._filterItems = filterItems;
  }

  get template() {
    const filterItemsTemplate = this._filterItems
      .map((filterItem, index) => this.createFilterItemTemplate(filterItem, index === 0))
      .join(``);

    return (
      `<section class="main__filter filter container">
      ${filterItemsTemplate}
    </section>`
    );
  }

  get element() {
    if (!this._element) {
      this._element = createElement(this.template);
    }

    return this._element;
  }

  createFilterItemTemplate(item, isChecked) {
    const {title, count} = item;

    return (
      `<input
        type="radio"
        id="filter__${title}"
        class="filter__input visually-hidden"
        name="filter"
        ${isChecked ? `checked` : ``}
        ${count === 0 ? `disabled` : ``}
      />
      <label for="filter__${title}" class="filter__label">
        ${title} <span class="filter__${title}-count">${count}</span></label
      >`
    );
  }

  removeElement() {
    this._element = null;
  }
}
