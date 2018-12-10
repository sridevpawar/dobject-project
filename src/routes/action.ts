import _ = require('lodash');
import { mongooseModels } from  '../mongooseModels';

export const actionRoutes = (app) => {

    /* Create */
    app.post('/action', (req, res) => {
        const newDobject = new mongooseModels.actionDobject(req.body);
        newDobject.save((err) => {
            if (err) {
                res.json({info: 'error during dobject create', error: err});
            };
            res.json({info: 'dobject created successfully'});
        });
    });

    /* Read */
    app.get('/action', (req, res) => {
        mongooseModels.actionDobject.find((err, dobject) => {
            if (err) {
                res.json({info: 'error during find dobject', error: err});
            };
            res.json({info: 'dobject found successfully', data: dobject});
        });
    });

    app.get('/action/:id', (req, res) => {
        mongooseModels.actionDobject.findById(req.params.id, (err, dobject) => {
            if (err) {
                res.json({info: 'error during find dobject', error: err});
            };
            if (dobject) {
                // res.json({info: 'dobject found successfully', data: dobject});
                setTimeout(function(){
                    res.json({info: 'dobject found successfully', data: dobject});
                }, 10000);
            } else {
                res.json({info: 'dobject not found'});
            }
        });
    });

    /* Update */
    app.put('/action/:id', (req, res) => {
        mongooseModels.actionDobject.findById(req.params.id, (err, dobject) => {
            if (err) {
                res.json({info: 'error during find dobject', error: err});
            };
            if (dobject) {
                _.merge(dobject, req.body);
                dobject.save(function(err) {
                    if (err) {
                        res.json({info: 'error during dobject update', error: err});
                    };
                    res.json({info: 'dobject updated successfully'});
                });
            } else {
                res.json({info: 'dobject not found'});
            }

        });
    });

    /* Delete */
    app.delete('/action/:id', (req, res) => {
        mongooseModels.actionDobject.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.json({info: 'error during remove dobject', error: err});
            };
            res.json({info: 'dobject removed successfully'});
        });
    });


};
