
class PollsResource(Resource):

    def post(self, site_id):
        """
        @api {post} /api/v1/sites/:site_id/polls
        @apiName PostPolls
        @apiGroup Poll
        @apiDescription
            Create a new poll.
        @apiParam {Number} site_id The site ID.
        @apiExample {json} Examples request
            {
                "site_id": 1,
                "name": "Polly,
                "show_branding": true
            }
        @apiSuccessExample {json} Example response
            {
                "responses": [
                    {
                        "country_name": "Sweden",
                        "country_code": "SV",
                        "created_epoch_time": 1432685571,
                        "index": 1,
                        "response_path": "/"
                    }
                ]
                "firstname": "John",
                "lastname": "Doe"
            }
        """
       pass


class PollResponsesResource(Resource):

    def get(self, site_id, poll_id):
        """
        @api {get} /api/v1/sites/:site_id/polls/:poll_id/responses
        @apiName GetPollResponses
        @apiGroup Poll
        @apiDescription
            Get all the responses available for a poll.
        @apiParam {Number} site_id The site ID.
        @apiParam {Number} poll_id The poll ID.
        @apiSuccessExample {json} Example response
            {
                "responses": [
                    {
                        "country_name": "Sweden",
                        "country_code": "SV",
                        "created_epoch_time": 1432685571,
                        "index": 1,
                        "response_path": "/"
                    }
                ]
                "firstname": "John",
                "lastname": "Doe"
            }
        """
        pass
