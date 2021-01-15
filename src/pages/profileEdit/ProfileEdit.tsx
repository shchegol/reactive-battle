import React from 'react';
import Button from '@components/button';
import { useHistory } from 'react-router-dom';

/**
 * User profile edit page
 * @constructor
 */

export default function ProfileEdit() {
  const history = useHistory();

  const handleGoBack = () => history.goBack();

  return (
    <div className="container">
      <div className="row mt-10">
        <div className="col-auto">
          <Button
            type="button"
            color="link"
            onClick={handleGoBack}
          >
            GO BACK
          </Button>
        </div>
      </div>
    </div>
  );
}
