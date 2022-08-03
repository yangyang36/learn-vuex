export default {
  registerCoach(context, data) {
    const coachData = {
      id: context.rootGetters.userId,
      hourlyRate: data.rate,
      ...data,
    };
    context.commit('registerCoach', coachData);
  },
};
