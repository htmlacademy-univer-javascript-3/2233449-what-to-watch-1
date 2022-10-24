import Review from "../../components/review";

export default function renderActivePart(activePart: string) {
  switch (activePart) {
    case "overview":
      return renderInfo();
    case "review":
      return renderReviews();
    case "details":
      return renderDetails();
  }

}

function renderInfo() {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">8,9</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
          Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.
        </p>

        <p>Gustave prides himself on providing first-className service to the hotel's guests, including
          satisfying
          the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies
          mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her
          murder.
        </p>

        <p className="film-card__director"><strong>Director: Wes Anderson</strong></p>

        <p className="film-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe
          and other </strong></p>
      </div>
    </>
  )
}

function renderDetails() {
  return (
    <>
      <div className="film-card__text film-card__row">
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">Wes Anderson</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value">
                    Bill Murray, <br/>
                    Edward Norton, <br/>
                    Jude Law, <br/>
                    Willem Dafoe, <br/>
                    Saoirse Ronan, <br/>
                    Tony Revoloru, <br/>
                    Tilda Swinton, <br/>
                    Tom Wilkinson, <br/>
                    Owen Wilkinson, <br/>
                    Adrien Brody, <br/>
                    Ralph Fiennes, <br/>
                    Jeff Goldblum
                    </span>
          </p>
        </div>

        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">1h 39m</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">Comedy</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">2014</span>
          </p>
        </div>
      </div>
    </>
  )
}

function renderReviews() {
  return (
    <>
      <div className="film-card__reviews film-card__row">
        <div className="film-card__reviews-col">
          <Review text={'Discerning travellers and Wes Anderson fans will luxuriate in the\n' +
          '                      glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed\n' +
          '                      films in years.'} author={'Kate Muir'} date={'2016-12-24'}
                  dateText={'December 24, 2016'} rating={'8,9'}
          />
          <Review text={'Anderson\'s films are too precious for some, but for those of us willing\n' +
          '                      to lose ourselves in them, they\'re a delight. "The Grand Budapest Hotel" is no different, except\n' +
          '                      that he has added a hint of gravitas to the mix, improving the recipe.'}
                  author={'Bill Goodykoontz'} date={'2015-11-18'} dateText={'November 18, 2015'} rating={'8,0'}
          />
          <Review text={'I didn\'t find it amusing, and while I can appreciate the creativity,\n' +
          '                      it\'s an hour and 40 minutes I wish I could take back.'} author={'Amanda Greever'}
                  date={'2015-11-18'} dateText={'November 18, 2015'} rating={'8,0'}
          />
        </div>
        <div className="film-card__reviews-col">
          <Review text={'The mannered, madcap proceedings are often delightful, occasionally\n' +
          '                      silly, and here and there, gruesome and/or heartbreaking.'}
                  author={'Matthew Lickona'} date={'2016-12-20'} dateText={'December 20, 2016'} rating={'7,2'}
          />
          <Review text={'It is certainly a magical and childlike way of storytelling, even if the\n' +
          '                      content is a little more adult.'} author={'Paula Fleri-Soler'}
                  date={'2016-12-20'} dateText={'December 20, 2016'} rating={'7,6'}
          />
          <Review text={'It is certainly a magical and childlike way of storytelling, even if the\n' +
          '                      content is a little more adult.'} author={'Paula Fleri-Soler'}
                  date={'2016-12-20'} dateText={'December 20, 2016'} rating={'7,0'}
          />
        </div>
      </div>
    </>
  )
}
