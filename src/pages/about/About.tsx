import React from 'react';
import { useHistory } from 'react-router-dom';
import MainTitle from '@components/mainTitle';
import Button from '@components/button';
import { Helmet } from 'react-helmet';
import Icon from '@components/icon';
import { FormattedMessage, useIntl } from 'react-intl';

export default function About() {
  const history = useHistory();
  const handleGoBack = () => history.goBack();
  const intl = useIntl();

  return (
    <div className="container-fluid pb-60">
      <Helmet
        title={intl.formatMessage({
          id: 'page.game.menu.about',
          defaultMessage: 'ABOUT',
        })}
      />

      <div className="row justify-content-left mt-20">
        <div className="col-12 col-md-2 col-lg-3">
          <Button
            type="button"
            color="link"
            size="xl"
            onClick={handleGoBack}
            icon
          >
            <Icon name="arrow_back" />
          </Button>
        </div>

        <div className="col-12 col-md-8 col-lg-6">
          <div className="row mb-40">
            <div className="col">
              <MainTitle
                subtitleText={
                  intl.formatMessage({
                    id: 'page.game.menu.about',
                    defaultMessage: 'ABOUT',
                  })
                }
              />
            </div>
          </div>

          <div className="row justify-content-center mt-20">
            <article className="col">
              <h3>
                <FormattedMessage
                  id="page.about.text"
                  defaultMessage="ABOUT"
                />
              </h3>

              <p className="mt-20">
                Вы находитесь в приложении призванном воссоздать знаменитую игру Battle City
                в браузере. Изначально проект создавался как учебный, в рамках
                прохождения программы Яндекс.Практикум, но после защиты было решено и дальше
                разрабатывать его как pet-проект.
              </p>

              <h3 className="mt-40">
                В создании проекта учавствовали
              </h3>

              <p className="mt-20">
                <a href="https://github.com/shchegol">Александр Щеголь</a>
                <br />
                <a href="https://github.com/zemer">Дмитрий Сокун</a>
                <br />
                <a href="https://github.com/alexch365">Александр Чапышев</a>
              </p>

              <p className="mt-40">
                По всем вопросам и пожеланиям пишите на форум, либо на почту
                zelenzoom@gmail.com
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
