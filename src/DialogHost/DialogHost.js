import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Hidden from '@material-ui/core/Hidden';

import SignUpDialog from '../dialogs/SignUpDialog/SignUpDialog';
import SignInDialog from '../dialogs/SignInDialog/SignInDialog';
import SettingsDialog from '../dialogs/SettingsDialog/SettingsDialog';
import AlertDialog from '../dialogs/AlertDialog/AlertDialog';

class DialogHost extends Component {
  render() {
    // Properties
    const {
      isSignedIn,
      dialogs
    } = this.props;

    const signUpDialog = dialogs.signUpDialog;
    const signInDialog = dialogs.signInDialog;
    const settingsDialog = dialogs.settingsDialog;
    const signOutDialog = dialogs.signOutDialog;

    return (
      <React.Fragment>
        <Hidden xsDown>
          {!isSignedIn &&
            <React.Fragment>
              <SignUpDialog
                dialogProps={signUpDialog.dialogProps}

                {...signUpDialog.props}
              />

              <SignInDialog
                dialogProps={signInDialog.dialogProps}

                {...signInDialog.props}
              />
            </React.Fragment>
          }
        </Hidden>

        <Hidden smDown>
          {isSignedIn &&
            <SettingsDialog
              dialogProps={settingsDialog.dialogProps}

              {...settingsDialog.props}
            />
          }
        </Hidden>

        <Hidden smUp>
          {!isSignedIn &&
            <React.Fragment>
              <SignUpDialog
                dialogProps={{
                  fullScreen: true,

                  ...signUpDialog.dialogProps
                }}

                {...signUpDialog.props}
              />

              <SignInDialog
                dialogProps={{
                  fullScreen: true,

                  ...signInDialog.dialogProps
                }}

                {...signInDialog.props}
              />
            </React.Fragment>
          }
        </Hidden>

        <Hidden mdUp>
          {isSignedIn &&
            <SettingsDialog
              dialogProps={{
                fullScreen: true,

                ...settingsDialog.dialogProps
              }}

              {...settingsDialog.props}
            />
          }
        </Hidden>

        {isSignedIn &&
          <React.Fragment>
            <AlertDialog
              dialogProps={signOutDialog.dialogProps}

              {...signOutDialog.props}
            />
          </React.Fragment>
        }
      </React.Fragment>
    );
  }
}

DialogHost.propTypes = {
  // Properties
  isSignedIn: PropTypes.bool.isRequired,
  dialogs: PropTypes.object.isRequired
};

export default DialogHost;