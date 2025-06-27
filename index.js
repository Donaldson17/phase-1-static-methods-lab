class Formatter {
  // Capitalizes the first letter of the string
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Removes all non-alphanumeric characters except dashes, single quotes, and spaces
  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  // Capitalizes all words except certain exceptions, always capitalizes the first word
  static titleize(str) {
    const exceptions = [
      'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'
    ];
    return str
      .split(' ')
      .map((word, idx) => {
        if (
          idx === 0 ||
          !exceptions.includes(word.toLowerCase())
        ) {
          return this.capitalize(word);
        } else {
          return word.toLowerCase();
        }
      })
      .join(' ');
  }
}