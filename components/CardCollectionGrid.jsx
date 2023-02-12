import styles from "../styles/ObjectCard.module.css";

export const CardCollectionGrid = ({ cards }) => {
  return (
    <div key={"CardCollectionGrid"} className={styles.grid}>
      {cards}
    </div>
  );
};

export const ObjectCardDetails = ({ card }) => {

    if (card.type === 'Waffe') {
        return (
            <div key={'Card_Details_' + card._id} className={styles.main_content}>
                <p className={styles.card_name}>{card.name}</p>
                <p className={styles.element}>Typ: {card.wp_type}</p>
            </div>
        );
    } else {
        return (
            <div key={'Card_Details_' + card._id} className={styles.main_content}>
                <p className={styles.card_name}>{card.name}</p>
                <p className={styles.element}>Element: {card.element}</p>
                <p className={styles.element}>Typ: {card.wp_type}</p>
            </div>
        );
    }

};

export const ObjectCard = ({ card }) => {
    return (
        <div key={card._id}>
            <div key={'card_'+card._id} className={getCardStyle(card)}>
              <img src={card.image_url}/>
               <h6 className={styles.card_name}>{card.name}</h6>
               <ObjectCardDetails card={card} />
           </div>
        </div>
    );
};


function getCardStyle(card) {
    let style = styles.card + ' ';

    if (card.type === 'Waffe') {
        // weapon
        switch(card.rating) {
            case 5: return style + styles.card_bg_weapon_5_star + ' ' + styles.card_gold;
            case 4: return style + styles.card_bg_weapon_4_star + ' ' + styles.card_purple;
            default: return style + styles.card_bg_weapon_3_star;
        }
    } else {
        // figure
        switch(card.rating) {
            case 5: return style + styles.card_gold;
            case 4: return style + styles.card_purple;
            default: return style;
        }
    }
}