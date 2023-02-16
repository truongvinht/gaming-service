import styles from '../styles/ObjectCard.module.css';

export const CardCollectionGrid = ({ cards }) => {
  return (
    <div key="CardCollectionGrid" className={styles.grid}>
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
      <div key={'card_' + card._id} className={getCardStyle(card)}>
        <img src={card.image_url} />
        <h6 className={styles.card_name}>{card.name}</h6>
        <ObjectCardDetails card={card} />
      </div>
    </div>
  );
};

export const ArtifactCard = ({ card }) => {
  return (
    <div key={card._id}>
      <div key={'card_artifact_' + card._id} className={getCardStyle(card)}>
        <img className={styles.custom_img50} src={card.image_url} />
        <h6 className={styles.card_name}>{card.name}</h6>
        <ArtifactCardDetails card={card} />
      </div>
    </div>
  );
};
function getCardStyle(card) {
  let style = styles.card + ' ';

  if (card.type === 'Waffe') {
    // weapon
    switch (card.rating) {
      case 5:
        return style + styles.card_bg_weapon_5_star + ' ' + styles.card_gold;
      case 4:
        return style + styles.card_bg_weapon_4_star + ' ' + styles.card_purple;
      default:
        return style + styles.card_bg_weapon_3_star;
    }
  } else if (card.type === 'Figur') {
    // figure
    switch (card.rating) {
      case 5:
        return style + styles.card_gold;
      case 4:
        return style + styles.card_purple;
      default:
        return style;
    }
  } else {
    // artifacts
    switch (card.max_rating) {
      case 5:
        return style + styles.card_bg_weapon_5_star + ' ' + styles.card_gold;
      case 4:
        return style + styles.card_bg_weapon_4_star + ' ' + styles.card_purple;
      default:
        return style + styles.card_bg_weapon_3_star;
    }
  }
}

// custom artifact card details
export const ArtifactCardDetails = ({ card }) => {
  let dungeonName = '';
  let dungeonImageUrl = '';

  let dungeonImg = null;
  if (Object.prototype.hasOwnProperty.call(card, 'dungeon')) {
    dungeonName = card.dungeon.name;
    dungeonImageUrl = card.dungeon.image_url;
    dungeonImg = <img className={styles.domain_img} src={dungeonImageUrl} />;
  } else {
    dungeonImg = <div />;
  }

  if (card.max_rating === 5) {
    let artifactDesc = card.four_set;

    if (artifactDesc.length > 180) {
      artifactDesc = artifactDesc.substring(0, 180) + '...';
    }

    return (
      <div key={'Card_Details_' + card._id} className={styles.main_content}>
        <div className={styles.artifact_details}>
          <p className={styles.artifact_title}>2er Set</p>
          <p className={styles.artifact_description}>{card.two_set}</p>
          <p className={styles.artifact_title}>4er Set</p>
          <p className={styles.artifact_description}>{artifactDesc}</p>
        </div>
        {dungeonImg}
        <p className={styles.domain_title}>{dungeonName}</p>
      </div>
    );
  } else {
    return (
      <div key={'Card_Details_' + card._id} className={styles.main_content}>
        <p className={styles.card_name}>{card.name}</p>
      </div>
    );
  }
};
