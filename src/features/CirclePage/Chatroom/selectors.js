// Selector: fonction qui prend le state ou un bout du state en params
// et qui renvoie des données dérivées du state

/**
 * Fonction qui retourne la liste des messages du state
 * @param {object} state state du store
 * @returns {array} liste des messages du state
 */
 export function getMessages(state) {
    return state.auth;
  }
  
  /**
   * Fonction qui retourne l'id le plus grand du tableau d'objet fournit en paramètre
   * @param {array} array tableau d'objet avec une propriété "id"
   * @returns {number} id le plus grand
   */
  export function getMaxId(array) {
    if (array.length <= 0) {
      return 0;
    }
  
    // const ids = array.map((message) => message.id);
    const ids = array.map(({ id }) => id);
    const maxId = Math.max(...ids);
  
    return maxId;
  
    // return Math.max(...array.map(({ id }) => id));
  }
  
  /**
   * Fonction qui compare l'auteur du message avec l'utilisateur courant
   * @param {string} surname auteur du message
   * @returns {bool} retourne true si l'auteur est le même que le pseudo
   */
  export const getIsMine = (surname) => (state) => state.surname === surname;