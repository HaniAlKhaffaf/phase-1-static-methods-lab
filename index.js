class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(str){
    const small_words = ['a', 'an', 'and', 'but', 'for', 'of', 'from', 'at', 'by', 'the'];

    return str.split(' ').map((word, index) => {
      if (index !== 0 && small_words.includes(word)) {
        return word.toLowerCase();
      } else {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
    }).join(' ');
  }
}